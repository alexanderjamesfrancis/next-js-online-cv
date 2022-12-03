export default function JobCardList({companyName, dateWorked, roleWorked, descriptionHeader, description}){

    if (!descriptionHeader){
        descriptionHeader = ""
    }

    return(
        <div class="flex flex-col max-w-full px-8 py-4 mx-2 my-2 shadow-2xl md:px-28 border scale-95 hover:scale-100 transition duration-200">
            <div class="underline underline-offset-1 mb-4">
              <h3 class="font-bold">{companyName}</h3>
                <div class="font-semibold">
                  <h4>From {dateWorked}</h4>
                  <h3>{roleWorked}</h3>
                </div>
                
            </div>
              
              <p class="mb-4">{descriptionHeader}
                
              </p>
            <div class="space-y-8">
                {description.map((jobItem, index) => {
                    <div key={index} class="space-y-2">
                        <h4 class="text-lg underline underline-offset-1">{jobItem.header}</h4>
                        {jobItem.content.map((contentItem, index) => {
                            <p key={index}>contentItem</p>
                        })}
                    </div>    
                })}
              {/* <div class="space-y-2">
                
                <h4 class="text-lg underline underline-offset-1">New Product Entry and Updating</h4>
                <p>Taking new product files and reformatting data to adhere to pre-defined schema 
                  and updating existing product lines with new SKUs. 
                  </p>
                <p>Researching relevant information for new products. E.G EU tyre label for eligible 
                  products or finding assets and information in order to properly market new 
                  products. 
                  </p>
                <p>Both actions require heavy use of excel and PHP import tools to a Magento back-end. 
                </p>
                <p>Bug fixing, if there are any issues with the data import. 
                </p>
              </div>
              <div class="space-y-2">
                <h5 class="text-lg underline underline-offset-1">Inter-Departmental Relations</h5>
                <p>Liaising with the Sales and Customer Services manager on adding relevant products 
                  and marketing direction of new brands and products. </p>
                <p>Requesting training on best practice for new items in order for data to be consistent 
                  and scalable in future from Web Development Lead. 
                  </p>
                <p>Working with suppliers when required to aquire product specific information.</p>
              </div> */}
            </div>
               
            

        </div>
    )
}