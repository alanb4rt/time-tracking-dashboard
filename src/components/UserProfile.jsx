import { getImageURL } from "../utils/getImageURL";

export default function UserProfile({ firstName, lastName }) {
  const imageURL = `image-${firstName.toLowerCase()}.png`;

  return (
    <div className="flex flex-col h-full bg-[var(--blue)] rounded-2xl p-6">
      <img
        src={getImageURL(imageURL)}
        alt={firstName}
        className="rounded-full outline outline-2 mb-4 size-16"
      />
      <div className="my-auto">
        <p className="text-sm opacity-50">Report for</p>
        <h1 className="text-3xl font-light">
          {firstName}
          <br />
          {lastName}
        </h1>
      </div>
    </div>
  );
}
