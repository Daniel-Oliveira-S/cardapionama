import "../styles/App.css";

interface CTAProps {
  children: React.ReactNode;
  href: string;
  id?: string;
  rel?: string;
  target?: string;

}

export function CTA(props: CTAProps) {
  function scroll(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    console.log("scroll to top");
  }

  return (
    <a href={props.href} className="CTA" onClick={scroll} id={props.id} rel={props.rel} target={props.target}>
      {props.children}
    </a>
  );
}
