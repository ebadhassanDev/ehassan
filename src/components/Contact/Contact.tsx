import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { title } from 'process';

const ContactSection = styled.section`
  padding: 100px 0;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  text-align: center;
`;

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ContactTitle = styled.h2`
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 20px;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.accent};
    margin: 20px auto 0;
  }
`;

const ContactSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 40px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const Input = styled.input`
  padding: 12px 15px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.md};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.2);
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.5;
  }
`;

const TextArea = styled.textarea`
  padding: 12px 15px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.md};
  min-height: 150px;
  resize: vertical;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.2);
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.5;
  }
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  margin-top: 10px;
  align-self: flex-start;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.border};
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled.div`
  background-color: rgba(46, 213, 115, 0.1);
  color: #2ed573;
  padding: 15px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin-top: 20px;
  text-align: center;
  border: 1px solid rgba(46, 213, 115, 0.2);
`;

const ErrorMessage = styled(SuccessMessage)`
  background-color: rgba(255, 71, 87, 0.1);
  color: #ff4757;
  border-color: rgba(255, 71, 87, 0.2);
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error', message: string }>({ 
    type: 'idle', 
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all fields.'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      
      const serviceId = 'service_99q4uuz'; 
      const templateId = 'template_x9ugvpx';
      const publicKey = '0pUyG9fpoCR1v-X4A'; 
      
      // Initialize EmailJS
      emailjs.init(publicKey);
      
      const templateParams = {
        name: formData.name,
        email: formData.email,
        to_email: 'ebadhassan.dev@gmail.com',
        message: formData.message,
        title: 'Client Request',
        reply_to: formData.email
      };

      await emailjs.send(serviceId, templateId, templateParams);
      
      // Clear form on success
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ContactTitle>Get In Touch</ContactTitle>
          <ContactSubtitle>
            Have a question or want to work together? Feel free to reach out!
          </ContactSubtitle>
          
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                disabled={isSubmitting}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ebadhassan.dev@gmail.com"
                disabled={isSubmitting}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi Ebad, I'd like to chat about..."
                disabled={isSubmitting}
                required
              />
            </FormGroup>
            
            <SubmitButton 
              type="submit" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            
            {status.type === 'success' && (
              <SuccessMessage>
                {status.message}
              </SuccessMessage>
            )}
            
            {status.type === 'error' && (
              <ErrorMessage>
                {status.message}
              </ErrorMessage>
            )}
          </ContactForm>
        </motion.div>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
