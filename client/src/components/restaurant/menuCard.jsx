import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


const demo = [
    {
        Category: "Bread",
        ingredients: ["Whole Wheat"]
    },
    {
        Category: "protein",
        ingredients: ["beef patty", "bacon"]
    },
    
]
const MenuCard = () => {

    const handleCheckBoxChange = (value) => {
        console.log(value);
    }

  return (
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='lg:flex items*center justify-between'>
            <div className='lg:fex items-center lg:gap-5'>
                <img className='w-[7rem] h-[7rem] object-cover'
                 src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg" alt="" />
                 <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                    <p className='font-semibold text-xl'>Burger</p>
                    <p>$499</p>
                    <p className='text-gray-500 text-sm lg:block hidden'>A hamburger condiments such as mustard, mayonnaise, ketchup, relish, or special sauces; and are frequently placed on sesame seed buns. A hamburger topped with cheese is called a cheeseburger.</p>
                    
                 </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
         <form>
            <div className='flex gap-5 flex-wrap'>
                {demo.map((item)=>
                <div>
                    <p>{item.Category}</p>
                    <FormGroup>
                     {item.ingredients.map((item)=>
                    <FormControlLabel control={<Checkbox onChange={() => handleCheckBoxChange(item)} />} label={item} />
)}
                </FormGroup>
                </div>)}
                    
            </div>
            <div className="flex justify-start pt-5">
                <Button type='submit' variant="contained" disabled={false}>{true?"Add to Cart":"out of stock"}</Button>
            </div>
            </form>
        </AccordionDetails>
      </Accordion>
  )
}

export default MenuCard
