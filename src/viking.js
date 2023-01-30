// Soldier
class Soldier {
    constructor(health, strength) {
        this.health=health;
        this.strength=strength;
    }
    // Methods
    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health-=damage;
    }    
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
    super(health,strength);
        this.name=name
    }

    receiveDamage(damage){
        this.health-=damage;
        if (this.health>0){
            return(`${this.name} has received ${damage} points of damage`);
        }
        else {
            return (`${this. name} has died in act of combat`)
        }
        

    }    
    battleCry(){
       return ('Odin Owns You All!');
    }
}

// Saxon
class Saxon extends Soldier{

    receiveDamage(damage){
        this.health-=damage;
        if (this.health>0){
            return(`A Saxon has received ${damage} points of damage`);
        }
        else {
            return (`A Saxon has died in combat`)
        }

    }
}

// War
class War {
    vikingArmy=[]
    saxonArmy=[]

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);

    }
    addViking(Viking){
        this.vikingArmy.push(Viking)

    }
    vikingAttack(){
           // Select a random Saxon to attack
    const targetIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const targetSaxon = this.saxonArmy[targetIndex];

    // Get a random Viking to attack
    const attackerIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const attackerViking = this.vikingArmy[attackerIndex];

    // Calculate damage
    const damage = attackerViking.strength;

    // Call receiveDamage method on the targetSaxon
    let saxonDamage=targetSaxon.receiveDamage(damage);

    // Remove the targetSaxon from the army if it has died
    if (targetSaxon.health <= 0) {
        this.saxonArmy.splice(targetIndex, 1);
    }
    return saxonDamage
}

saxonAttack() {
    // Select a random Viking to attack
    const targetIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const targetViking = this.vikingArmy[targetIndex];

    // Get a random Saxon to attack
    const attackerIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const attackerSaxon = this.saxonArmy[attackerIndex];

    // Calculate damage
    const damage = attackerSaxon.strength;

    // Call receiveDamage method on the targetViking
    let vikingDamage=targetViking.receiveDamage(damage);

    // Remove the targetViking from the army if it has died
    if (targetViking.health <= 0) {
        this.vikingArmy.splice(targetIndex, 1);
    }
    return vikingDamage
}

showStatus() {
    if (this.saxonArmy.length==0){
       return ('Vikings have won the war of the century!');
    }
    if (this.vikingArmy.length==0) {
        return ('Saxons have fought for their lives and survived another day...');
        
    } else {
        return('Vikings and Saxons are still in the thick of battle.')
        
    }

    }



}
