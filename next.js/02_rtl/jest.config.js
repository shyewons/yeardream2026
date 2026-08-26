// next와 jest를 연동
const nextJest = require("next/jest");

// 여기에 있는 설정파일들을 읽어라(설정 파일들은 이 공간에 다 있다)
const createJestConfig = nextJest({dir: './'});

const jestConfig = {
    // 어떤 모듈을 사용해서 테스트할 건지
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        // @로 시작하고 뒤에 /가 들어가고 ()안의 특정한 패턴이 들어간다
        // (.)는 한 글자를 뜻한다 (.*) 계속해서 글자가 나온다는 뜻
        '^@/(.*)$':'<rootDir>/src/$1'
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'] // 테스트 전에 환경 설정하는 용도
};

module.exports = createJestConfig(jestConfig);