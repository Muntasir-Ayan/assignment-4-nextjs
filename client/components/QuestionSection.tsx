const QuestionSection = () => (
  <div className="container mx-auto bg-blue-300 rounded-xl p-6 mb-10">
    <h2 className="text-2xl font-semibold mb-2">Have a question?</h2>
    <p className="text-gray-600 mb-4">
      Get instant answers with AI-powered search of property information and reviews.
    </p>
    <div className="relative">
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2">🔍</span>
      <input
        type="text"
        placeholder="Is there free parking?"
        className="w-full pl-10 py-3 border border-gray-300 rounded-full"
      />
    </div>
  </div>
);

export default QuestionSection;
