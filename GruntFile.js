//压缩js，css并合并到一个文件中
module.exports = function(grunt) {
    //初始化配置grunt任务
    grunt.initConfig({
        //concat是合并文件的任务
        concat: { //任务名
            options: {
                separator: ';'
            },
            basic: {
                //合并哪些js文件
                src: [
                    "src/main/webapp/libs/jquery/jquery.min.js",
                    "src/main/webapp/libs/materialize/js/materialize.js",
                    "src/main/webapp/libs/dplayer/1.26.0/DPlayer.js",
                    "src/main/webapp/libs/swiper/swiper-bundle.js",
                    "src/main/webapp/libs/nprogress/nprogress.js",
                    "src/main/webapp/js/main-front.js",
                    "src/main/webapp/libs/jqcloud/jqcloud.js",
                    "src/main/webapp/libs/tocbot/tocbot.js",
                    "src/main/webapp/libs/aos/aos.js",
                    "src/main/webapp/js/music.z.js",
                    "src/main/webapp/libs/background/ribbon-refresh.min.js",
                ],
                //合并到该文件中
                dest: "src/main/webapp/merged/js/index.js"
            }
        },
        //uglify压缩合并生成的文件
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %>最后修改于： <%= grunt.template.today("yyyy-mm-dd") %> */\n' //添加banner
            },
            release: {
                options: {
                    mangle: false, //混淆变量名
                    preserveComments: false, //不删除注释，还可以为 false（删除全部注释），some（保留@preserve @license @cc_on等注释）
                },
                // files: [{
                //     expand:true,
                //     cwd:'src/main/webapp/js',//js目录下
                //     src:'**/*.js',//所有js文件
                //     dest: 'src/main/webapp/merged/js/built.min.js'//输出到此目录下
                // }],
                //将合并的文件压缩
                files: {
                       'src/main/webapp/merged/js/index.min.js': 'src/main/webapp/merged/js/index.js'
                  }

            },
        },
        //jshint检查js的语法
        // jshint:{
        //     options:{
        //         jshintrc: 'src/main/resources/grunt/.jshintrc' //指定配置文件
        //     },
        //     build: ['Gruntfile.js', 'src/main/webapp/js/*.js']  //指定检查的文件
        // },
        //cssmin是合并并压缩所有css文件的任务
        cssmin: {
            one:{
                options: {
                    banner: '/*! <%= pkg.name %>最后修改于： <%= grunt.template.today("yyyy-mm-dd") %> */\n', //添加banner,
                    report: 'gzip'
                },
                files: {
                    'src/main/webapp/merged/css/index.min.css': [
                            "src/main/webapp/libs/aos/aos.css",
                            "src/main/webapp/libs/materialize/css/materialize.css",
                            "src/main/webapp/libs/awesome/css/all.css",
                            "src/main/webapp/libs/awesome/css/fontawesome-animation.min.css",
                            "src/main/webapp/libs/nprogress/nprogress.css",
                            "src/main/webapp/css/main-front.css",
                            "src/main/webapp/css/guestbook.css"

                        ],
                    "src/main/webapp/merged/css/home.min.css":[
                        "src/main/webapp/libs/swiper/swiper-bundle.css",
                        "src/main/webapp/libs/swp/style.css",
                        "src/main/webapp/libs/jqcloud/jqcloud.css",
                        "src/main/webapp/css/music.css",
                    ],
                    // "src/main/webapp/merged/css/guestbook.min.css":[
                    //     "src/main/webapp/css/guestbook.css"
                    // ],
                    "src/main/webapp/merged/css/article.min.css":[
                        "src/main/webapp/libs/typoCss/typo.css",
                        "src/main/webapp/libs/tocbot/tocbot.css",
                    ]
                }
            }

        },

        //实现 .ftl命令的热部署
        shell: {                                // Task
            listFolders: {                        // Target
                options: {                        // Options
                    stdout: true
                },
                command: 'curl http://127.0.0.1/noAuth/hotLoad?token=raM9Eveb0DaOcoXc1F0FcyWqk8dSRyXqHnqsaCH42w4'
            }
        },

       // watch实时监控文件的改变并更新页面
        watch: {
            script1: {
                files: [
                    'src/main/webapp/css/*.css',
                    'src/main/webapp/js/*.js',
                    "src/main/webapp/libs/**/*.js",
                    "src/main/webapp/libs/**/*.css",
                    "src/main/webapp/html/freemarker/**/*.ftl",
                ],
                tasks: ['concat','uglify','cssmin','shell'],
                options: {
                    spawn: false,
                },
            },
            script2:{
                files: [
                    "src/main/webapp/html/freemarker/**/*.ftl",
                ],
                tasks: ['shell'],
                options: {
                    spawn: false,
                },
            }
        },
    });

    // 加载对应的任务插件
    grunt.loadNpmTasks('grunt-contrib-concat');//合并js
    grunt.loadNpmTasks('grunt-contrib-uglify');//压缩js
    //js语法检查插件
 //   grunt.loadNpmTasks('grunt-contrib-jshint');//检查js语法格式
    grunt.loadNpmTasks('grunt-contrib-cssmin');//合并压缩css

    grunt.loadNpmTasks('grunt-contrib-watch');//监控

    grunt.loadNpmTasks('grunt-shell');

     //默认被执行的任务列表
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
    grunt.registerTask('build', ['default', 'watch'])


};
