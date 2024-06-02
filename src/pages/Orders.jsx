import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import { Header } from '../components'
import { Column } from '@syncfusion/ej2-react-charts'

const Orders = () => {
  return (
    <div className='my-20 nx-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category= "Page" title= "Orders" />

      <GridComponent
      id='gridcomp'
      dataSource={ordersData}
      allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport ]} />
      </GridComponent>
    </div>
  )
}

export default Orders