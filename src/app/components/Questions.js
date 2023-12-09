export default function Faq({ data }) {
  return (
    <>
      {data && (
        <div className="my-8">
          <h2 className="text-center block my-8 text-3xl font-bold">
            Frequent questions
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {data?.map((question) => {
              return (
                <div
                  key={question.index}
                  className="h-32 rounded-lg bg-gray-100 p-4"
                >
                  <div className="rounded-lg font-bold">
                    {question.question}
                  </div>
                  <p className="text-gray-800">{question.answer}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
