alert("Hello, you are a scientist creating a new center of species survial. Choose the species you want to include in a new breeding facility. Be sure to name each individual and have multiple individuals of different sexes so that breeding will be successful!")

class Individual {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    describe() {
        return `${this.name} plays ${this.sex}.` ;
    }
}

class Species {
    constructor(name) {
        this.name = name;
        this.individuals = [];
    }
    
    addIndividual(individual) {
        if (individual instanceof Individual) {
            this.individuals.push(individual);
        } else {
            throw new Error(`You can only add an instance of Individual. Argument is not a individual: ${individual}`);
        }
    }
    describe() {
        return `${this.name} has ${this.individuals.length} individuals.`;
    } 
}

class Menu {
    constructor() {
        this.species = [];
        this.selectedSpecies = null;
    }


start() {
    let selection = this.showMainMenuOptions();
    while (selection!= 0){
        switch(selection) {
            case '1':
                this.chooseSpecies();
                break;
            case '2':
                this.viewSpecies();
                break;
            case '3':
                this.deleteSpecies();
                break;
            case '4':
                this.displaySpecies();
                break;
            default:
                selection = 0;
        }
        selection= this.showMainMenuOptions();
    }
    
    alert ('Goodbye!');
    }

showMainMenuOptions () {
    return prompt(`
        0) exit
        1) choose new species
        2) view species
        3) delete species
        4) display all species
        `);
    }   

    showSpeciesMenuOptions(speciesInfo){
        return prompt(`
        0) back
        1) name new individual
        2) remove individual
        -----------------
        ${speciesInfo}
        `);
    }
  
    displaySpecies() {
        let speciesString = '';
        for (let i = 0; i < this.species.length; i++) {
            speciesString += i + ') ' + this.species[i].name + '\n';
        }
        alert(speciesString);
    }
    
    chooseSpecies() {
        let name = prompt('Enter name for new species:');
        this.species.push(new Species(name));
    }

    viewSpecies(){
        let speciesString = '';
        for (let i = 0; i < this.species.length; i++) {
            speciesString += i + ') ' + this.species[i].name + '\n';
        }
        let index = prompt(speciesString + '\n' + 'Enter the index of the species you wish to view:');
        if (index > -1 && index < this.species.length){
            this.selectedSpecies = this.species[index];
            let description = 'Species Name: ' + this.selectedSpecies.name + '\n';
            
            for (let i = 0; i < this.selectedSpecies.individuals.length; i++){
                description += i + ') ' + this.selectedSpecies.individuals[i].name
                    + ' - '+ this.selectedSpecies.individuals[i].sex + '\n';
            }

          let selection = this.showSpeciesMenuOptions(description);
          switch(selection) {
                case '1':
                  this.chooseIndividual();
                  break;
                case '2':
                    this.deleteIndividual();
            }
        }  
    }

    deleteSpecies() {
        let speciesString = '';
        for (let i = 0; i < this.species.length; i++) {
            speciesString += i + ') ' + this.species[i].name + '\n';
        }
        let index = prompt(speciesString + '\n' +
            'Enter the index of the species you wish to delete:');
        if (index > -1 && index < this.species.length) {
            this.species.splice(index, 1);
        }
    }

    chooseIndividual() {
        let name = prompt('Enter name for new individual:');
        let sex = prompt('Enter sex for new individual:');
        this.selectedSpecies.individuals.push(new Individual(name, sex));
    }

    deleteIndividual() {
        let index = prompt('Enter the index of the individual you wish to delete:');
        if (index > -1 && index < this.selectedSpecies.individuals.length) {
            this.selectedSpecies.individuals.splice(index, 1);
        }
        
    }
}    



let menu = new Menu();
menu.start();