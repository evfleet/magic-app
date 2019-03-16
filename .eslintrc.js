module.exports =  {
  parser:  '@typescript-eslint/parser', 
  extends:  [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint', 
    'plugin:prettier/recommended',
  ],
  parserOptions:  {
    ecmaVersion:  2018,  
    sourceType:  'module',  
    ecmaFeatures:  {
      jsx:  true,  
    },
  },
  rules:  {
    "@typescript-eslint/no-explicit-any": false,
    "@typescript-eslint/explicit-member-accessibility": false,
    "@typescript-eslint/no-empty-interface": false,
    "import/no-unresolved": false,
    "import/prefer-default-export": false
  }
};

