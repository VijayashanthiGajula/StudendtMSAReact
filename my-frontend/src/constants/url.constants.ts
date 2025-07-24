// src/constants/url.constants.ts
// This file contains the base URLs for the API endpoints used in the application.

const API_BASE_URL = process.env.REACT_APP_BASE_URL;
export const baseUrl = `${API_BASE_URL}/Intakes`;
console.log("API_BASE_URL",baseUrl);
export const CourseUrl =   `${API_BASE_URL}/Courses`;  
console.log("API_BASE_URL",CourseUrl);