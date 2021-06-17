import React from 'react'

const SubmitBtn = (props: any) => {
  return  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">{props.name}</button>
}

export default SubmitBtn;
