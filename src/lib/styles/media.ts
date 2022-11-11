const mediaQuery = (maxWidth: number) => `
  @media (max-width: ${maxWidth}px)
`;

const media = {
  large: mediaQuery(1200),
  medium: mediaQuery(1024),
  small: mediaQuery(720),
  custom: mediaQuery,
};

export default media;
