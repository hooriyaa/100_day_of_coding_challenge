// Class Access Modifiers
// Public:
class MyClassPublic {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
  }
  const instancePublic = new MyClassPublic("John");
  console.log(instancePublic.name); // Accessing the public property
    

  // Private:
  class MyClassPrivate {
    private secret: string;
    constructor(secret: string) {
        this.secret = secret;
    }
    revealSecret() {
        console.log(this.secret); // Accessing the private property from within the class
    }
  }
  const instancePrivate = new MyClassPrivate("My secret");
  instancePrivate.revealSecret(); // Valid access

    // Protected:
    class Parent {
        protected familyName: string;
        constructor(name: string) {
            this.familyName = name;
        }
      }
      class Child extends Parent {
        introduceFamily() {
            console.log(`Our family name is ${this.familyName}`);
        }
      }
      const parentEx=new Parent("Smith")
      const childEx = new Child("Johnson");

    //   console.log(parent.familyName); thiswould result in an error familyName is protected
      childEx.introduceFamily(); // Valid access