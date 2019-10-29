node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
      sh 'printenv'
    }
    stage('build docker test file') {
      if (env.BRANCH_NAME == 'jhd/dev/test'){
        steps{
          sh 'docker build -t app-test -f Dockerfile.test --no-cache . '
        }
      }
    }
    stage('Docker build'){
      sh 'docker build -t s-sons_dev_build -f Dockerfile.dev --no-cache .'
    } 
  }
  catch (err) {
    throw err
  }
}