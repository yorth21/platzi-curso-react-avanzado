import { QueryFunction, useQuery } from "@tanstack/react-query";

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
}

const fetchCourse: QueryFunction<Course[]> = async () => {
  const response = await fetch('/api/courses.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}

export const useCourse = () => {
  return useQuery<Course[], Error>({
    queryKey: ['courses'],
    queryFn: fetchCourse,
  });
};