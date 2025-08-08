export const generateDefaultTableData = (takeInitialValue) => {
    const array = takeInitialValue.ar_bausteineArray.map(item => ({
      schluessel: item.infobaustein.schluessel,
      bezeichnung: item.infobaustein.bezeichnung,
      wert: null,
      pflichtfeld: false
    }))

    return {
        schluessel: takeInitialValue.schluessel,
        bezeichnung: takeInitialValue.bezeichnung,
        array,
    }
  }

  export const getInitialBauartData = (bauart) => {
    const array = bauart.map(item => ({
      id: item.id,
      bezeichnung: item.bezeichnung
    }))
    return {
        bauartItems: array
    }
  }
  