import Card from "~/components/Card";
import Container from "~/components/Container";
import { FaGithub, FaYoutube } from "react-icons/fa";

export default function Index() {
  return (
    <Container className="py-10 space-y-3">
      <Card className="p-6">
        Hi! I will share what I learned on this blog. Currently mostly Laravel
        related tips, code snippets etc.
      </Card>
      <div className="grid grid-cols-2 gap-4">
        <a
          href="https://www.github.com/davutkmbr"
          target={"_blank"}
          rel="noreferrer"
        >
          <Card
            className="flex items-center justify-center gap-3 p-3"
            bg="bg-sky-100"
            color="text-sky-600"
          >
            <FaGithub />
            <span>GitHub</span>
          </Card>
        </a>
        <a
          href="https://www.youtube.com/c/DavutKember"
          target={"_blank"}
          rel="noreferrer"
        >
          <Card
            className="flex items-center justify-center gap-3 p-3"
            bg="bg-red-100"
            color="text-red-600"
          >
            <FaYoutube />
            <span>YouTube</span>
          </Card>
        </a>
      </div>
    </Container>
  );
}
