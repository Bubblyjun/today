var gulp=require("gulp"),htmlmin=require("gulp-htmlmin"),uglify=require("gulp-uglify"),yscss=require("gulp-minify-css"),webserver=require("gulp-webserver"),urlt=require("url");gulp.task("yshtml",function(){console.log(11111111),gulp.src("./index.html").pipe(htmlmin({removeComments:!0,collapseWhitespace:!0,removeScriptTypeAttributes:!0,removeStyleLinkTypeAttributes:!0,minifyJS:!0,minifyCSS:!0})).pipe(gulp.dest("./html"))}),gulp.task("ysjs",function(){console.log(3333333),gulp.src("./*.js").pipe(uglify()).pipe(gulp.dest("js"))}),gulp.task("yscss",function(){console.log(44444),gulp.src(["./*/*.css","./*.css"]).pipe(yscss()).pipe(gulp.dest("css"))}),gulp.task("default",["yshtml","ysimage","ysjs","yscss"]),gulp.task("webserver",function(){gulp.src(".").pipe(webserver({port:8888,host:"localhost",middleware:function(e,s,l){var t=urlt.parse(e.url);s.setHeader("Access-Control-Allow-Origin","*"),"GET"===e.method?"/getdata"===t.pathname?s.end("全部完成了，就是不会给你看"):"/getdatas"===t.pathname||l():l()}}))}),gulp.task("default",["webserver"]);