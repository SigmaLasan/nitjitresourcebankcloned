require('dotenv').config();

console.log('Environment Variables Check:');
console.log('==========================');

const requiredVars = [
    'CLIENT_ID',
    'CLEINT_SECRET', 
    'REDIRECT_URI',
    'REFRESH_TOKEN',
    'SUPPORT_MAIL',
    'MONGODB_URI'
];

let allGood = true;

requiredVars.forEach(varName => {
    const value = process.env[varName];
    if (value) {
        console.log(`✅ ${varName}: ${varName.includes('SECRET') || varName.includes('TOKEN') ? '***SET***' : value}`);
    } else {
        console.log(`❌ ${varName}: NOT SET`);
        allGood = false;
    }
});

console.log('\n==========================');
if (allGood) {
    console.log('✅ All required environment variables are set!');
} else {
    console.log('❌ Some environment variables are missing. Please check your .env file.');
}

console.log('\nNote: Make sure you have a .env file in the root directory with all required variables.'); 