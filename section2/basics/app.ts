let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

// unknown을 string에 할당할 수 없음
// userName = userInput;
// 타입체크를 하면 가능
if (typeof userInput === 'string') {
    userName = userInput;
}


function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('An error occurred!', 500);