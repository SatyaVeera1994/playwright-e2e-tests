
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
                'yotta-dev',
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
                script {

                    def credentialId = ''

                    if (params.PLATFORM == 'yotta-int') {
                        credentialId = '3400c34f-908d-4dd1-94a0-9448bb124fce'

                    } else if (params.PLATFORM == 'yotta-dev') {
                        credentialId = '3c1b9ae7-4540-42bd-bfd3-26d446ff1a25'

                    } else {
                        error("Credentials not configured for ${params.PLATFORM}")
                    }

                    withCredentials([
                        usernamePassword(
                            credentialsId: credentialId,
                            usernameVariable: 'TEST_USER_NAME',
                            passwordVariable: 'TEST_PASSWORD'
                        )
                    ]) {

                        bat '''
                            echo Running tests on %PLATFORM%
                            call npm run portal
                        '''
                    }
                }
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
}
