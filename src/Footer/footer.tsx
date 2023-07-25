import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  Image,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export function FooterLinks({ data }: FooterLinksProps) {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          신규 가입자에게만 적용됩니다. iPhone, iPad 또는 Mac에서만 쓸 수
          있습니다. 무료 체험 혜택은 2023년 7월 10일부터 2023년 8월 21일까지
          신청해야 합니다. 무료 체험 기간이 끝나면 월 8,900원에 이용할 수
          있습니다. 멤버십은 매월 자동으로 갱신되며, 해지 시 종료됩니다. 약관이
          적용됩니다. ◊ 신규 가입자에게만 적용됩니다. 체험 기간이 끝나면 월
          8,900원에 이용할 수 있습니다. 본 프로모션은 한정된 기간 동안 신규
          가입자에게만 적용되며, 신규 가입자는 적용 대상 기기를 iOS 15 또는
          iPadOS 15 이후 버전이 설치된 Apple 기기에 연결해야 합니다. 무료 체험
          혜택은 적용 대상 기기 페어링 이후 3개월 안에 신청할 수 있습니다. 적용
          대상 기기를 이미 소유하고 있는 경우 오디오 제품을 구입하지 않아도
          혜택을 받을 수 있습니다. 멤버십은 매월 자동으로 갱신되며, 해지 시
          종료됩니다. 특정 제한 사항 및 기타 약관이 적용됩니다. 호환되는
          하드웨어 및 소프트웨어가 필요합니다. Dolby Atmos 지원 공간 음향으로
          제공되지 않는 콘텐츠도 있습니다. Apple One 무료 체험에는 현재 무료
          체험을 하고 있거나 멤버십을 통해 이용하고 있는 서비스는 제외됩니다.
          멤버십은 매월 자동으로 갱신되며, 해지 시 종료됩니다. 특정 제한 사항 및
          기타 약관이 적용됩니다. Apple Music 1, Apple Music Hits, Apple Music
          Country는 Apple Music 멤버십에 가입하지 않아도 이용할 수 있습니다.
          Apple Music Sing은 iOS 16.2 이후 버전이 설치된 iPhone 11 이후 모델
          또는 iPhone SE(3세대), iPadOS 16.2 이후 버전이 설치된 iPad Pro
          11(3세대 이후 모델), iPad Air(4세대 이후 모델), iPad mini(6세대),
          iPad(9세대 이후 모델) 및 Apple TV 4K(3세대)에서 지원됩니다. ‘가족
          공유’ 설정이 필요합니다. 자세한 내용은 apple.com/kr/family-sharing을
          참고하십시오. 무료 체험 혜택은 신규 가입자에 한하여 제공됩니다.
          멤버십은 명시된 월 요금으로 갱신되며, 해지 시 종료됩니다.
        </Text>
      </Container>

      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image src="./Image/dopamine.png" width={100} height={50} />
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2023 도파민디펜스. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
}
