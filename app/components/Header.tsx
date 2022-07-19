import avatar from "../../public/author-avatar.jpeg";
import Container from "./Container";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className="bg-gray-50">
      <Container className="flex flex-col-reverse md:flex-row md:items-center justify-center gap-x-16">
        <div className="flex items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/articles">Blog</NavLink>
        </div>
        <div className="flex items-center gap-3 py-4">
          <img
            className="w-12 md:w-20 rounded-full"
            src={avatar}
            alt="Author avatar"
          />
          <div>
            <div className="md:text-xl font-medium">Davut Kember</div>
            <div className="text-sm md:text-base text-zinc-600">
              Senior PHP Developer
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
