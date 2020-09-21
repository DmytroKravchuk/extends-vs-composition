class Programmer {
    constructor(name) {
        this.name = name;
    }

    code() {
        console.log(`${this.name} is coding...`);
    }
}

class Frontend extends Programmer {
    angular() {
        console.log(`${this.name} is creating Angular app...`);
    }
}

class Backend extends Programmer {
    nodejs() {
        console.log(`${this.name} is programing on Node js`)
    }
}

class Fullstack extends Frontend {
    nodejs() {
        console.log(`${this.name} is programing on Node js`)
    }
}

const programmes = new Programmer('proger 1');
programmes.code();
const frontend = new Frontend('Frontend');
frontend.code();
frontend.angular();
const backend = new Backend('Backend');
backend.code();
backend.nodejs();

