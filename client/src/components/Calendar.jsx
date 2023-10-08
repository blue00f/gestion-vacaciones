function Calendar() {
  return (
    <div className="w-96 mx-auto mt-10">
      <div date-rangepicker className="flex items-center">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none"></div>
          <input
            name="start"
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10  text-center dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date start"
          />
        </div>
        <span className="mx-4 text-white">to</span>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center   pointer-events-none"></div>
          <input
            name="end"
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10  text-center dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date end"
          />
        </div>
      </div>
      <div class="flex justify-center items-center py-10">
         
          <button
            type="submit"
            class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded">
            Enviar
          </button>
         
      </div>
    </div>
  )
}

export default Calendar
