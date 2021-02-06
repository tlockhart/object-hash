interface ObjectType {
    [key: string]: string | number
}

class Hash{
    hash!: {[key: string]: string | number};
    key!: string;
    value!: string;

    constructor(objects: ObjectType) {
        const keys = Object.keys(objects);
        console.log("keys:", keys);
        keys.forEach((key: string) => {
            this.push(key, objects[`${key}`]);
        })
        console.log("Hash:", this.hash);
    }
    // Take new key value pair and assing to hash
    push(key: string, value: string | number) {
        let target: {[string: string]: string | number} = {};
        let source: {[string: string]: string | number} = {};
        if (key === "step" || key === "min" || key === "max") {
            // Store new value to source
            source = this.assignValue(value, key);
            // copy ne source to target and assign target to hash
            console.log("source:", source);
            this.hash = {...this.hash,...source};
        }
        return this.hash;
    }
    // Assigns hash key values
    assignValue(value: string | number, key: string): {[string: string]: string} {
        const sourceHash: {[string: string]: string} = {};
        sourceHash[key] = value.toString();
        return sourceHash;
    }
}

const myObject = {
        step: 0.1,
        min: 0,
        max: 100
    };
const myHash = new Hash(myObject);