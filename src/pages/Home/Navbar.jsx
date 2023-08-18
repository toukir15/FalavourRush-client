export default function Navbar() {
  return (
    <div className="h-14 shadow-lg">
      <div className="flex justify-between items-center container mx-auto h-14">
        {/* nav logo */}
        <div>
          <img src="" alt="" />
          <h4 className="text-xl font-medium text-pink-600">FlavourRush</h4>
        </div>
        {/* sign in sign up  */}
        <div className="flex gap-8">
          <p className="text-pink-600 border border-pink-600 py-1 px-2 text-sm rounded">
            Log in
          </p>
          <p className="bg-pink-600 text-white py-1 px-2 text-sm rounded">
            Sign up
          </p>
        </div>
      </div>
    </div>
  );
}
