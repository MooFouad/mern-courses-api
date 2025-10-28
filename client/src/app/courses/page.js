export default async function CoursesPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses`, {
    cache: "no-store", // علشان يجيب أحدث بيانات كل مرة
  });

  const courses = await res.json();

  return (
    <div>
      <h1>Courses List</h1>
      <ul className="pl-4">
        {courses.map((c, index) => (
          <li key={index}>
            <span className='p-2'>{c.name}</span>
            <span>{c.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
