
pipeline {
    agent any

    tools {
        nodejs 'node22'
        allure 'allure'
    }
    parameters {
        choice(
            name: 'PLATFORM',
            choices: [
                'yotta-int',
                'dev',
                'qa',
                'qa2',
                'dvb-i',
                'ops'
            ],
            description: 'Select environment for Playwright execution'
        )
    }

    options {
        timeout(time: 20, unit: 'MINUTES')
    }

    environment {
        TEST_CREDS = credentials('3400c34f-908d-4dd1-94a0-9448bb124fce')
    }

    stages {

        stage('Build') {
            steps {
                bat '''
                    call npm ci
                    call npx playwright install chromium
                '''
            }
        }

        stage('Test') {
            steps {
                bat '''
                    set TEST_USER_NAME=%TEST_CREDS_USR%
                    set TEST_PASSWORD=%TEST_CREDS_PSW%

                    call npm run portal
                '''
            }
        }
    }
post {
    always {
        script {
            echo 'Checking Allure results...'

            bat '''
                if exist allure-results (
                    echo Allure results folder found
                    dir allure-results
                ) else (
                    echo Allure results folder NOT found
                )
            '''

            if (fileExists('allure-results')) {
                allure(
                    includeProperties: false,
                    jdk: '',
                    results: [[path: 'allure-results']],
                    reportBuildPolicy: 'ALWAYS'
                )
            } else {
                echo 'Allure results directory not found'
            }
        }
    }
}
    // post {
    //     always {
    //         script {
    //             if (fileExists('allure-results')) {
    //                 allure includeProperties: false,
    //                        jdk: '',
    //                        results: [[path: 'allure-results']],
    //                        reportBuildPolicy: 'ALWAYS'
    //             } else {
    //                 echo 'Allure results directory not found'
    //             }
    //         }
    //     }
    // }
}
