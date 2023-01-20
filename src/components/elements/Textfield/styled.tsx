import { styled, TextField as Input } from '@mui/material'

export const CustomTextField = styled(Input)(({ theme }) => ({
  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    background: '#FFFFFF',
    fontFamily: 'Poppins',
    color: '#888BAC',
    border: '2px solid #DCDFE4',
    borderRadius: 10,
    fontWeight: 'bold',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&.Mui-focused': {
      background: '#FFFFFF',
      color: '#888BAC',
      border: '2px solid #A3AA10',
    },
    '&.Mui-error': {
      background: '#FFFFFF',
      border: '2px solid #A33233',
      color: '#888BAC',
    },
    '&.Mui-disabled': {
      border: '2px solid #888BAC',
      background: '#00',
      color: '#888BAC',
    },
  },
  '& .MuiFilledInput-root:hover': {
    overflow: 'hidden',
    background: '#FFFFFF',
    fontFamily: 'Poppins',
    color: '#888BAC',
    border: '2px solid #DCDFE4',
    borderRadius: 10,
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&.Mui-focused': {
      background: '#FFFFFF',
      color: '#888BAC',
      border: '2px solid #A3AA10',
    },
    '&.Mui-error': {
      background: '#FFFFFF',
      border: '2px solid #A33233',
      color: '#888BAC',
    },
    '&.Mui-disabled': {
      border: '2px solid #888BAC',
      background: '#00',
      color: '#888BAC',
    },
  },
  '& label': {
    marginTop: '2px',
    fontFamily: 'Poppins',
    color: '#FEB048',
    fontWeight: 'bold',
    '&.Mui-focused': {
      color: '#A3AA10',
      fontWeight: 'bold',
    },
    '&.Mui-error': {
      color: '#A33233',
      fontWeight: 'bold',
    },
    '&.Mui-disabled': {
      color: '#888BAC',
      fontWeight: 'bold',
    },
  },
  '& .MuiFormHelperText-root': {
    marginLeft: 0,
    fontFamily: 'Poppins',
    color: '#272B52',
    fontSize: '12px',
    '&.Mui-focused': {
      color: '#71770B',
    },
    '&.Mui-error': {
      color: '#A33233',
    },
    '&.Mui-disabled': {
      color: '#888BAC',
    },
  },
}))
