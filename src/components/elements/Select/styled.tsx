import { styled, TextField as Input } from '@mui/material'

export const CustomSelectField = styled(Input)(({ theme }) => ({
  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    fontFamily: 'Poppins',
    color: '#DC8F1A',
    border: '2px solid #A39B74',
    borderRadius: 10,
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&.Mui-focused': {
      color: '#DC8F1A',
      border: '2px solid #DC8F1A',
    },
    '&.Mui-error': {
      border: '2px solid #6D2223',
      color: '#DC8F1A',
    },
    '&.Mui-disabled': {
      border: '2px solid #A39B74',
    },
  },
  '& label': {
    marginTop: '2px',
    fontFamily: 'Poppins',
    color: '#A39B74',
    fontWeight: 600,
    '&.Mui-focused': {
      color: '#A39B74',
    },
    '&.Mui-error': {
      color: '#CA5355',
    },
    '&.Mui-disabled': {
      color: '#A39B74',
    },
  },
  '& .MuiFormHelperText-root': {
    marginLeft: 0,
    fontFamily: 'Poppins',
    color: '#DC8F1A',
    fontSize: '12px',
    '&.Mui-error': {
      color: '#e73636',
      fontWeight: 'bold',
    },
    '&.Mui-disabled': {
      color: '#A39B74',
    },
  },
}))
