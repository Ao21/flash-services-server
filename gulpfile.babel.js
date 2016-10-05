import gulp from 'gulp';
import ts from 'gulp-typescript';
import path from 'path';
import sourcemaps from 'gulp-sourcemaps';
import nodemon from 'gulp-nodemon'

var started = false;
var tsProject = ts.createProject('tsconfig.json');

export function nodemonServer(done) {
	return nodemon({
		watch: ['src/**/*.js'],
        script: 'src/index.js'
	}).on('start', function () {
		if (!started) {
			done();
			started = true;
		}
	})
}

export function typescriptServer() {
	 var tsResult = gulp.src([
        'src/**/*.ts',
        'node_modules/@types/**/*.d.ts',
        'typings/main/**/*'])
        .pipe(sourcemaps.init())
        .pipe(tsProject())
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.resolve('./src')))
}

export function watchServer(done) {
	gulp.watch('./src/**/*.ts', typescriptServer);
	done();
}

const build = gulp.series(typescriptServer);
const serve = gulp.series(typescriptServer, gulp.parallel(watchServer, nodemonServer));
export { serve, build };

export default serve;	

