function createProgrammer(name) {
    const programmer = {name}
    return {
        ...programmer,
        ...canCode(programmer)
    }
}

function canCode({ name }) {
    return {
        code: () => console.log(`${name} is coding...`)
    }
}

function createFrontend(name) {
    const programmer = new createProgrammer(name);
    return {
        ...programmer,
        ...canCodeAngular(programmer)
    }
}

function canCodeAngular({name}) {
    return {
        angular: () => console.log(`${name} is creating Angular app...`)
    }
}

function createBackend(name) {
    const programmer = createProgrammer(name);
    return {
        ...programmer,
        ...canNodejs(programmer)
    }
}

function canNodejs({name}) {
    return {
        nodejs: () => console.log(`${name} is programing on Node js`)
    }
}

const programmer = new createProgrammer('Dima');
programmer.code();
const frontend = new createFrontend('Alex');
frontend.angular();
const backend = new createBackend('Vlad');
backend.nodejs();