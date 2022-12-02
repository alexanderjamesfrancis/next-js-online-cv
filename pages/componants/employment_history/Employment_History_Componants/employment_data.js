export default function employment_data() {
  return (
    // This is the schema for this data
    // {
    //
    //   companyName: "",
    //   dateWorked: "",
    //   roleWorked: "",
    //   descriptionHeader: '',  I.e what I have done or got out of the role in breif
    //   /* Description is a list of objects for each set of content */
    //   description: [{
    //     header: "",
    //     content: [],
    //   }],
    // },
    {
      companyName: "Fortis Student Living – Nottingham",
      dateWorked: "January 2017 – May 2017",
      roleWorked: "Accommodation Manager",
      descriptionHeader: "",
      description: [
        {
          header: "Service Management",
          content: [
            "Maintaining B2B relationships with our suppliers to manage orders and promote coordination to deliver goods to the end user.",
            "Maintaining B2B relationships with our suppliers to manage orders and promote coordination to deliver goods to the end user.",
            "Building working relationships with longer term customers to maintain rapport and ongoing Sales.",
          ],
        },
        {
          header: "Sales",
          content: [
            "Taking customer inquiries via a variety of means such as phone, email and Livechat.",
            "Interpreting the information provided to direct the customer to the appropriate product and identify opportunities for upselling as required.",
            "Handling both cash sales for goods and taking payment via multiple platforms.",
            "Making sure all processes are followed when dealing with customers outside of the UK and ensuring VAT compliance (Pre-Brexit).",
          ],
        },
        {
          header: "Customer Service",
          content: [
            "Answering any questions customers have in a fast and effective manner via a means suited to the customer.",
            "Resolving any complaints may arise. E.g. Delivery, warranty etc.",
            "Engaging with the customer in a formal but approachable way to discuss what would suit their requirements best.",
          ],
        },
      ],
    },
    {
      companyName: "Premier Inn, Warwick – Thyme",
      dateWorked: "December 2014 – December 2016",
      roleWorked: "Duty Manager",
      descriptionHeader: "Based on my performance and customer service skills from being a Team Member, I was promoted to Duty Manager within Premier Inn:",
      description: [
        {
          header: "Safety and Security",
          content: [
            "Safety and security of all guests within the 124 room hotel (approx. 350 guests at peak)",
            "Safety of staff on site in event of emergency (up to 20 staff)",
            "Participating in regular fire test procedures such as fire alarm testing and drills.",
          ],
        },
        {
          header: "Staff Management",
          content: [
            "Directly managing a team of multiple staff from receptionists to chefs.",
            "Staff training of all new starters in brand standards and SOPs",
            "Providing health and safety training and information to staff",
          ],
        },
        {
          header: "Financial Admin Experience",
          content: [
            "Safe Holder responsibility of house float",
            "Responsible for End of Day cash tallying and banking ranging from £1 up to thousands",
            "Till counting and cash handling",
          ],
        },
        {
          header: "",
          content: [],
        },
      ],
    }
  );
}
