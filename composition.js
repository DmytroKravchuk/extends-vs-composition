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
        ...canAngular(programmer)
    }
}

function canAngular({name}) {
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

function createFullstack(name) {
    const programmer = new createProgrammer(name);
    return {
        ...programmer,
        ...canNodejs(programmer),
        ...canAngular(programmer)
    }
}

const programmer = new createProgrammer('Dima');
programmer.code();
const frontend = new createFrontend('Alex');
frontend.angular();
const backend = new createBackend('Vlad');
backend.nodejs();
const fullstack = new createFullstack('Dima');
fullstack.angular();
fullstack.nodejs();