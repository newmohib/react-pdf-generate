
import React from 'react';
import {PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Data to render in the table
const data = [
  { id: 1, firstName: 'Mark', lastName: 'Otto', handle: '@mdo' },
  { id: 2, firstName: 'Jacob', lastName: 'Thornton', handle: '@fat' },
  { id: 3, firstName: 'Larry', lastName: 'the Bird', handle: '@twitter' },
];

// Create a stylesheet
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 10,
  },
  table: {
    width: '100%',
    border: 1,
    borderColor: '#000',
  },
  header: {
    backgroundColor: '#f8f9fa',
  },
  headerCell: {
    padding: 5,
    fontWeight: 'bold',
    fontSize: '10px',
    width: '25%',
    backgroundColor: '#e6e6e6',
    // border: 1,
    // borderColor: '#000',
  },
  row: {
    flexDirection: 'row',
    borderBottom: 1,
    borderColor: '#000',
  },
  cell: {
    padding: 5,
    width: '25%',
    fontSize: '8px'
    // border: 1,
    // borderColor: '#000',
  },
  titleRow: {
    flexDirection: 'row',
    borderBottom: 1,
    borderColor: '#000',
  },
  left: {
    textAlign:'left',
    paddingLeft: "10px",
    width: '50%',
  },
  right: {
    textAlign:'right',
    paddingRight: "10px",
    width: '50%',
  },
});

// Define the component to render the PDF
const MyDocument = () => (
  <Document id='145866'>
    <Page size="A4" style={styles.page} >
      <View style={styles.table}>
      <View style={styles.titleRow}>

      <Text style={styles.left}>Client Address</Text>

      <Text style={styles.right}>Compoany Address</Text>

      </View>
        <View style={styles.row}>
          <Text style={styles.headerCell}>ID</Text>
          <Text style={styles.headerCell}>First</Text>
          <Text style={styles.headerCell}>Last</Text>
          <Text style={styles.headerCell}>Handle</Text>
        </View>
        {data.map((row) => (
          <View style={styles.row} key={row.id}>
            <Text style={styles.cell}>{row.id}</Text>
            <Text style={styles.cell}>{row.firstName}</Text>
            <Text style={styles.cell}>{row.lastName}</Text>
            <Text style={styles.cell}>{row.handle}</Text>
          </View>
        ))}
      <Text id='Footnote'> Descriptions </Text>
      </View>
    </Page>
  </Document>
);



const App = () => (
  <div>
    <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
  </div>
);

export default App;
