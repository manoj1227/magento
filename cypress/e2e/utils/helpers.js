const randomNumber = Math.floor(Math.random() * 1000000);
export class Helpers {
  
  getMockEmail() {
    return `test.${randomNumber}@gmail.com`;
  }

  getFirstName() {
    return `User${randomNumber}`;
  }
  getLastName() {
    return `Test${randomNumber}`;
  }

  getPassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let password = '';
    for (let i = 0; i < 12; i++) { // Length of the password (12 characters)
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
    return password;
  }

}
