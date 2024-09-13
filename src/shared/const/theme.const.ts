import { createTheme, Shadows, ThemeOptions } from '@mui/material';

const defaultTheme = createTheme();

const defaultShadows: ThemeOptions['shadows'] = [...defaultTheme.shadows];

export const theme = createTheme({
  cssVariables: true,
  shadows: defaultShadows.map(() => 'none') as Shadows,
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: 'head' },
              style: {
                fontSize: '14px',
                lineHeight: '20px',
                padding: '8px 12px',
                borderBottom: 'none',
                color: 'var(--text-header)',
              },
            },
            {
              props: { variant: 'body' },
              style: {
                fontSize: '13px',
                fontWeight: 500,
                lineHeight: '16px',
                padding: '8px 12px',
                borderColor: 'var(--gray)',
              },
            },
          ],
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: 'body2' },
              style: {
                fontSize: '14px',
                lineHeight: '20px',
              },
            },
            {
              props: { variant: 'h1' },
              style: {
                fontSize: '24px',
                fontWeight: 500,
                lineHeight: '32px',
              },
            },
          ],
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          variants: [
            {
              style: {
                overflowY: 'auto',
                width: '100%',
                flexGrow: 1,

                '&::-webkit-scrollbar': {
                  width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                  backgroundColor: '#F8F9FA',
                },

                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: '#5e667487',
                  borderRadius: '44px',
                },
              },
            },
          ],
        },
      },
    },

    MuiTableRow: {
      styleOverrides: {
        root: {
          variants: [
            {
              style: {
                '&:last-of-type': {
                  '& >td': { borderBottom: 'none' },
                },
                '& button': {
                  opacity: 0,
                },
                '&:hover': {
                  backgroundColor: 'var(--gray-hover)',
                  cursor: 'pointer',
                  '& button': {
                    opacity: 1,
                  },
                },
              },
            },
          ],
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              style: {
                color: 'var(--btn-color-default)',
                backgroundColor: 'var(--btn-bg-default)',
                borderRadius: 2,

                '&:hover': {
                  color: 'var(--btn-color-hover)',
                  backgroundColor: 'var(--btn-bg-hover)',
                },
                '& > span': { display: 'none' },
              },
            },
          ],
        },
      },
    },

    MuiPagination: {
      styleOverrides: {
        root: {
          variants: [
            {
              style: {
                'li > button': {
                  border: '1px solid #CED5DE',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  lineHeight: '20px',

                  '&:hover': {
                    backgroundColor: '#F2F5F8',
                  },

                  '&.Mui-selected': {
                    backgroundColor: '#F2F5F8',
                  },
                },

                'li >  div': {
                  border: '1px solid #CED5DE',
                  padding: '5px 9px',
                  borderRadius: '6px',
                },
              },
            },
          ],
        },
      },
    },
  },
});
