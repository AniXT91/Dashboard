const ProfileCard = ({ name, unit, requested, university, imageUrl }) => {
  console.log(imageUrl)
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start text-center lg:text-left">
      <div className="w-full lg:w-auto flex justify-center lg:justify-start">
        <img
          src={imageUrl || "/placeholder.svg?height=200&width=200"}
          alt={name}
          className="w-32 h-32 md:w-36 md:h-36 object-cover rounded-md"
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-xl font-semibold">{name}</h3>
        <div className="text-sm font-medium">
          <span className="text-gray-600">Unit:</span> {unit}
        </div>
        <div className="text-sm font-medium">
          <span className="text-gray-600">Requested:</span> {requested}
        </div>
        <div className="text-sm font-medium">
          <span className="text-gray-600">University:</span> {university}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
