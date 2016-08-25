module.exports = function ( grunt ) {

    /**
    * Load required Grunt tasks. These are installed based on the versions listed
    * in `package.json` when you do `npm install` in this directory.
    */
    grunt.loadNpmTasks("grunt-bower-install-simple");
    grunt.loadNpmTasks("grunt-karma");

    /**
     * This is the configuration object Grunt uses to give each plugin its instructions.
     */
    var taskConfig = {

        /*
        *  perform a "bower install"
        */
        "bower-install-simple": {
            options: {
                directory: "lib",
                forceLatest: true,
                interactive: false
            },
            "prod": {
                options: {
                    production: true
                }
            },
            "dev": {
                options: {
                    production: false
                }
            }
        },

        "karma":{
            options:{
                // overrides to karma.config.js
                configFile:'karma.conf.js',
                browsers:['Chrome'],
                reporters: ['progress'],
                logLevel:'INFO',
                background: false,
                singleRun: true,
                autoWatch:false
            },
            ci: {
                // intended for jenkins
                browsers: ['PhantomJS'],
                logLevel:'WARN',
                reporters: ['progress','coverage', 'junit']
            },
            test: {
                // single run
            }
        }
    };


    grunt.initConfig( taskConfig );



    /**********************************************************************************************************
     *
     *                                   B U I L D       T A R G E T S
     *
     **********************************************************************************************************

     /*
     * The default task is to build.
     */
    grunt.registerTask( 'default', [ 'bower-install-simple' ] );

};