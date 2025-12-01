"use client";
import { View, Text, TouchableOpacity, ScrollView } from "react-native-web";

export default function Home() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f0f4f8", padding: 20 }}>
      <View
        style={{
          flexDirection: "row",
          gap: 20,
          flexWrap: "wrap", // ensures responsiveness on smaller screens
        }}
      >
        {/* LEFT COLUMN */}
        <View style={{ flex: 1, minWidth: 300 }}>
          {/* User Info */}
          <View
            style={{
              backgroundColor: "#fff",
              padding: 20,
              borderRadius: 10,
              marginBottom: 20,
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowRadius: 5,
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>Jeff 🏆</Text>
            <Text style={{ fontSize: 16, color: "#555" }}>Score: 63.15</Text>
          </View>

          {/* Upcoming Games */}
          <View
            style={{
              backgroundColor: "#fff",
              padding: 20,
              borderRadius: 10,
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowRadius: 5,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 15 }}>
              Upcoming Games
            </Text>

            {[
              { teams: "West Ham vs Man City", time: "Sat 3:00 PM" },
              { teams: "FC Utrecht vs AFC Ajax", time: "Sun 5:30 PM" },
              { teams: "AS Monaco vs Toulouse", time: "Mon 8:00 PM" },
            ].map((match, index) => (
              <View
                key={index}
                style={{
                  paddingVertical: 10,
                  borderBottomWidth: index < 2 ? 1 : 0,
                  borderBottomColor: "#eee",
                }}
              >
                <Text style={{ fontSize: 16 }}>{match.teams}</Text>
                <Text style={{ fontSize: 14, color: "#888" }}>{match.time}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* RIGHT COLUMN */}
        <View style={{ flex: 2, minWidth: 300 }}>
          <View
            style={{
              backgroundColor: "#fff",
              padding: 20,
              borderRadius: 10,
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowRadius: 5,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 15 }}>
              Place Your Bets
            </Text>

            {[
              { match: "FC Cartagena vs Real Betis", odds: "2.15" },
              { match: "Real Betis vs FC Cartagena", odds: "2.15" },
              { match: "SC Freiburg vs FC Cartagena", odds: "2.15" },
            ].map((bet, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 12,
                  borderBottomWidth: index < 2 ? 1 : 0,
                  borderBottomColor: "#eee",
                }}
              >
                <View>
                  <Text style={{ fontSize: 16 }}>{bet.match}</Text>
                  <Text style={{ fontSize: 14, color: "#888" }}>
                    Odds: {bet.odds}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#28a745",
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    borderRadius: 6,
                  }}
                >
                  <Text style={{ color: "#fff", fontWeight: "600" }}>Bet</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
