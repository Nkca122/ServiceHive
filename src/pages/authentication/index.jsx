import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import {
  ArrowRightLeft,
  Clock,
  Users,
  TrendingUp,
  Heart,
  Shield,
} from "lucide-react";
import { Fade } from "react-awesome-reveal";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { useNavigate } from "react-router-dom";

const signupSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "At least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm your password"),
    terms: z.boolean().refine((val) => val, {
      message: "You must agree to the terms",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const signinSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(1, "Password is required"),
  remember: z.boolean().optional(),
});

export default function Authentication() {
  const [state, setState] = useState("signup");
  const naviagte = useNavigate();

  // signup form
  const signupForm = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const handleSignup = (values) => {
    console.log("✅ Signup Data:", values);
    naviagte("/dashboard");
  };

  // signin form
  const signinForm = useForm({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const handleSignin = (values) => {
    console.log("✅ Signin Data:", values);
    naviagte("/dashboard");
  };

  return (
    <section className="flex justify-center items-center h-full">
      {/* LEFT PANEL */}
      <div
        className="bg-primary hidden lg:flex flex-col flex-1/3 h-full rounded-tr-2xl rounded-br-2xl justify-center items-center gap-2 bg-center bg-cover"
        style={{ backgroundImage: "url(/assets/bg-blob.svg)" }}
      >
        <Fade
          className="absolute top-0 flex justify-center items-center"
          triggerOnce={true}
          direction="down"
        >
          <img
            src="/assets/bust.svg"
            alt=""
            loading="lazy"
            width={210}
            className="rotate-180"
          />
        </Fade>

        <Fade triggerOnce={true} delay={100}>
          <div className="relative flex flex-wrap justify-center items-center gap-2 *:odd:-translate-y-3 *:even:-translate-y-8 mt-8 *:text-accent-foreground *:animate-bounce *:odd:delay-100">
            <Badge
              variant="secondary"
              className="text-xs font-bold flex justify-center items-center gap-2 p-2 outline-2 outline-accent-foreground"
            >
              <TrendingUp size={48} /> Trending Fast
            </Badge>
            <Badge
              variant="secondary"
              className="text-xs font-bold flex justify-center items-center gap-2 p-2 outline-2 outline-accent-foreground"
            >
              <Shield size={48} /> Safety First
            </Badge>
            <Badge
              variant="secondary"
              className="text-xs font-bold flex justify-center items-center gap-2 p-2 outline-2 outline-accent-foreground"
            >
              <Heart size={48} /> Loved By All
            </Badge>
          </div>

          <div className="relative flex justify-center items-center px-2">
            <h6 className="font-bold text-7xl text-center text-accent-foreground font-imperial">
              Slot Swapper
            </h6>
          </div>

          <p className="text-sm font-semibold text-accent-foreground font-geo underline">
            Seamlessly exchange your calendar slots with others
          </p>

          <div className="relative flex flex-wrap justify-center items-center gap-2 *:odd:-translate-y-3 *:even:translate-y-5 mt-8 *:text-accent-foreground *:animate-bounce *:odd:delay-100">
            <Badge className="text-xs font-bold flex justify-center items-center gap-2 p-2 outline-2 outline-accent-foreground">
              <ArrowRightLeft size={48} /> Smart Swapping
            </Badge>
            <Badge className="text-xs font-bold flex justify-center items-center gap-2 p-2 outline-2 outline-accent-foreground">
              <Clock size={48} /> Real Time Updates
            </Badge>
            <Badge className="text-xs font-bold flex justify-center items-center gap-2 p-2 outline-2 outline-accent-foreground">
              <Users size={48} /> Community Driven
            </Badge>
          </div>
        </Fade>

        <Fade
          className="absolute bottom-0 flex justify-center items-center"
          triggerOnce={true}
          direction="up"
        >
          <img src="/assets/bust.svg" alt="" loading="lazy" width={210} />
        </Fade>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-2/3 h-full flex justify-center items-center">
        <Tabs
          defaultValue="signup"
          value={state}
          onValueChange={setState}
          className="border-2 border-primary rounded-2xl w-full lg:w-[60%]"
        >
          {/* SIGNUP TAB */}
          <TabsContent value="signup">
            <Card className="w-full shadow-none border-0 flex flex-col justify-center items-start">
              <CardHeader className="w-full *:text-left flex flex-col justify-center items-start gap-0">
                <CardTitle className="text-2xl">Create Account</CardTitle>
                <CardDescription className="text-center text-xs">
                  Join SwapTime to start exchanging calendar slots
                </CardDescription>
              </CardHeader>

              <Form {...signupForm}>
                <form
                  onSubmit={signupForm.handleSubmit(handleSignup)}
                  className="w-full"
                >
                  <CardContent className="flex flex-col gap-2 justify-center items-start w-full">
                    <div className="w-full flex justify-center items-center gap-2">
                      <FormField
                        control={signupForm.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={signupForm.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={signupForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={signupForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="••••••••"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={signupForm.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="••••••••"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={signupForm.control}
                      name="terms"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-2 pt-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm text-muted-foreground leading-none">
                            I agree to the Terms of Service and Privacy Policy
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  </CardContent>

                  <CardFooter className="flex flex-col justify-center items-center gap-1 mt-4">
                    <Button type="submit" className="w-full">
                      Create Account
                    </Button>
                    <Button variant="link" onClick={() => setState("login")}>
                      Already have an account?
                    </Button>
                  </CardFooter>
                </form>
              </Form>
            </Card>
          </TabsContent>

          {/* SIGNIN TAB */}
          <TabsContent value="login">
            <Card className="w-full shadow-none border-0 flex flex-col justify-center items-start">
              <CardHeader className="w-full flex flex-col justify-center items-start gap-0">
                <CardTitle className="text-2xl font-bold text-center">
                  Sign in to your account
                </CardTitle>
                <CardDescription className="text-center text-sm">
                  Create a new account to get started
                </CardDescription>
              </CardHeader>

              <Form {...signinForm}>
                <form
                  onSubmit={signinForm.handleSubmit(handleSignin)}
                  className="w-full"
                >
                  <CardContent className="flex flex-col gap-2 w-full">
                    <FormField
                      control={signinForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email address</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={signinForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Enter your password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex items-center justify-between">
                      <FormField
                        control={signinForm.control}
                        name="remember"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="text-sm text-muted-foreground">
                              Remember me
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-col gap-2 mt-4">
                    <Button type="submit" className="w-full">
                      Sign in
                    </Button>
                    <Button
                      type="button"
                      variant="link"
                      className="w-full"
                      onClick={() => setState("signup")}
                    >
                      Create a new account
                    </Button>
                  </CardFooter>
                </form>
              </Form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
