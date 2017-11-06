var gulp=require('gulp'),
    htmlmin = require('gulp-htmlmin'),//压缩html
	uglify = require('gulp-uglify'),//压缩js
	yscss = require('gulp-minify-css'),//压缩css
    webserver=require('gulp-webserver'),
    urlt=require('url');
//压缩html
gulp.task('yshtml',function(){
	console.log(11111111)
	 gulp.src('./index.html')
        .pipe(htmlmin({
            removeComments: true,//���HTMLע��
            collapseWhitespace:true,//ѹ��HTML
            removeScriptTypeAttributes:true,//ɾ��<script>��type="text/javascript"
            removeStyleLinkTypeAttributes:true,//ɾ��<style>��<link>��type="text/css"
            minifyJS: true,//ѹ��ҳ��JS
            minifyCSS: true//ѹ��ҳ��CSS
        }))
        .pipe(gulp.dest('./html'))
});
//压缩js
gulp.task('ysjs',function(){
	console.log(3333333)
	gulp.src('./*.js').pipe(uglify()).pipe(gulp.dest('js'))
});
//压缩css
gulp.task('yscss',function(){
		console.log(44444)
	gulp.src(['./*/*.css','./*.css']).pipe(yscss()).pipe(gulp.dest('css'))
})
gulp.task('default',['yshtml','ysimage','ysjs','yscss']);
gulp.task('webserver',function(){
	gulp.src(".").pipe(webserver({
		port:8888,
		host:'localhost',
		middleware:function(req,res,next){
			var obj = urlt.parse(req.url);
			res.setHeader('Access-Control-Allow-Origin','*')
			if(req.method==='GET'){
				if(obj.pathname==='/getdata'){
						res.end('全部完成了，就是不会给你看')
				}else if(obj.pathname==='/getdatas'){
				}else{
					next();
				}
			}else{
				next();
			}	
		}
	}));
});
gulp.task('default',['webserver'])
