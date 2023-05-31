import React, { useRef, useState } from 'react';

function PasswordGenerator() {





  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };




  const [password, setPassword] = useState('');

  const generatePassword = () => {




    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-={}[]|:;"<>,.?/~';

    const length = inputValue; // Şifre uzunluğu

    let charset = lowercaseLetters; // Başlangıçta sadece küçük harfler seçili
    let newPassword = '';

    if (includeUppercase) {
      charset += uppercaseLetters;
    }

    if (includeNumbers) {
      charset += numbers;
    }

    if (includeSymbols) {
      charset += symbols;
    }

    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPassword);
  };

  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (name === 'uppercase') {
      setIncludeUppercase(checked);
    } else if (name === 'numbers') {
      setIncludeNumbers(checked);
    } else if (name === 'symbols') {
      setIncludeSymbols(checked);
    }
  };

  const handleCopyingData = () => {
    navigator.clipboard.writeText(password)
      .then((result) => {
        console.log("kaydetme başarılı")
        setTimeout(() => {
          alert("şifre kopyalandı.")
        }, 100)
      })
      .catch((error) => {
        console.log(error)
      })

  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='container'>
        <div className='text-center'>
          <label>
            <input type="checkbox" className='mr-2' name="uppercase" checked={includeUppercase} onChange={handleCheckboxChange} />
            Büyük harfleri dahil et
          </label>
        </div>

        <div className='text-center'>
          <label>
            <input type="checkbox" className='mr-2' name="numbers" checked={includeNumbers} onChange={handleCheckboxChange} />
            Sayıları dahil et
          </label>
        </div>

        <div className='text-center'>
          <label>
            <input type="checkbox" className='mr-2' name="symbols" checked={includeSymbols} onChange={handleCheckboxChange} />
            Sembolleri dahil et
          </label>
        </div>


        <div className='text-center'>
          <input
            type="range"
            className='w-50'
            min={4}
            max={50}
            step={1}
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div className='text-center mt-3'>
          Şifre uzunluğu: {inputValue} karakter
        </div>


        <div className='text-center mt-2'>
          <button className='btn btn-success' onClick={generatePassword}>Şifre Oluştur</button>
        </div>

        <div className='text-center mt-3'>
          <div className='d-flex justify-content-center'>
            <input type="text" readOnly value={password} className='form-control w-50 mr-2' />
            <button onClick={handleCopyingData} className='btn btn-outline-secondary'>

              <i className="material-icons" style={{fontSize:15}}>content_copy</i>
            </button>
          </div>
        </div>




      </div>
    </div>


  );
}

export default PasswordGenerator;
