import React from 'react'
import { Form } from 'react-router-dom'

const ContactForm = () => {
  return (
    <Form class="grid grid-cols-2 gap-4 shadow-lg border-solid border-x-stone-400 rounded-xl bg-[#f5fafe5e] p-10 m-4 h-full prose">
      <div>
        <label for="name" class=" font-bold mb-2">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" class="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:border-blue-500" required />
      </div>
      <div>
        <label for="email" class=" font-bold mb-2">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" class="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:border-blue-500" required />
      </div>
      <div>
        <label for="phone" class=" font-bold mb-2">Phone</label>
        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" class="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:border-blue-500" required />
      </div>
      <div>
        <label for="inquiry" class=" font-bold mb-2">Inquiry</label>
        <select id="inquiry" name="inquiry" class="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:border-blue-500" required >
          <option value="" disabled selected>Select an inquiry type</option>
          <option value="general">General Inquiry</option>
          <option value="software">Software Development</option>
          <option value="custom">Custom Development</option>
          <option value="support">Support</option>
        </select>
      </div>
      <div class="col-span-2 ">
        <label for="message" class=" font-bold mb-2">Message</label>
        <textarea id="message" name="message" placeholder="Enter your message" class="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:border-blue-500" required></textarea>
      </div>

      <button type="submit" className='btn btn-primary col-span-2'>Submit</button>
    </Form>

        
  )
}

export default ContactForm