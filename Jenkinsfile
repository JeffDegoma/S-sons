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
<<<<<<< HEAD
      sh 'docker build -t app-test -f Dockerfile.test --no-cache . '
    }
    stage('Docker test'){
      sh 'docker run --rm app-test'
    }

=======
      if (env.BRANCH_NAME == 'jhd/dev/test'){
        steps{
          sh 'docker build -t app-test -f Dockerfile.test --no-cache . '
        }
      }
    }
    stage('Docker build'){
      sh 'docker build -t s-sons_dev_build -f Dockerfile.dev --no-cache .'
    } 
>>>>>>> jhd/dev/revamp
  }
  catch (err) {
    throw err
  }
}