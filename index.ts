// This doesn't work
const { constructor } = async () => {};

// This works
// const { constructor } = Object.getPrototypeOf(async function() {});

console.log('Breaks before')

