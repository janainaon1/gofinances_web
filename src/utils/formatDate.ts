const formatValue = (value: Date): string =>
  Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(value);

export default formatValue;
