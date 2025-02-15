import React, { lazy, Suspense, useMemo, useState, useTransition } from 'react'
import { useCourse } from './hooks/useCourse'
import './App.css'

const CourseList = lazy(() => import('./components/CourseList'))

const App: React.FC = () => {
  const { data: courses, isLoading, error } = useCourse();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const coursesPerPage = 2;
  const [isPending, startTransition] = useTransition();

  const currentCourses = useMemo(() => {
    if (!courses) return [];

    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    return courses.slice(indexOfFirstCourse, indexOfLastCourse);
  }, [courses, currentPage, coursesPerPage])

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!courses) return <p>No courses found</p>;

  return (
    <section>
      <h1>Learning Courses</h1>
      <Suspense fallback={<p>Loading course list...</p>}>
        <CourseList courses={currentCourses} />
      </Suspense>
      <div>
        {
          Array.from({ length: Math.ceil(courses.length / coursesPerPage) }, (_, index) => (
            <button
              key={index}
              onClick={() => {
                startTransition(() => {
                  setCurrentPage(index + 1);
                });
              }}
            >
              {index + 1}
            </button>
          ))
        }
      </div>
      {isPending && <p>Loading more courses...</p>}
    </section>
  );
}

export default App
